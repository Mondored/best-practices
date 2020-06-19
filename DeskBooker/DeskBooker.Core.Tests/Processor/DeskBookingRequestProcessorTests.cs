using DeskBooker.Core.DataInterface;
using DeskBooker.Core.Domain;
using FluentAssertions;
using FluentAssertions.Execution;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace DeskBooker.Core.Processor
{
    public class DeskBookingRequestProcessorTests
    {
        private readonly DeskBookingRequest _request;
        private readonly List<Desk> _availableDesks;
        private readonly DeskBookerRequestProcessor _processor;
        private readonly Mock<IDeskBookRepository> _deskBookingRepositoryMock;
        private readonly Mock<IDeskRepository> _deskRepositoryMock;

        public DeskBookingRequestProcessorTests()
        {
            _request = new DeskBookingRequest
            {
                FirstName = "Thomas",
                LastName = "Huber",
                Email = "thomas@thomasclaudiussomething.com",
                Date = new DateTime(2000, 8, 27)
            };

            _availableDesks = new List<Desk> { new Desk { Id = 7 } };

            _deskBookingRepositoryMock = new Mock<IDeskBookRepository>();
            _deskRepositoryMock = new Mock<IDeskRepository>();
            _deskRepositoryMock
                .Setup(x => x.GetAvailableDesks(_request.Date))
                .Returns(_availableDesks);

            _processor = new DeskBookerRequestProcessor(
                _deskBookingRepositoryMock.Object, _deskRepositoryMock.Object);
        }

        [Fact]
        public void ShouldReturnDeskBookResultWithRequestValues()
        {
            // Act
            DeskBookingResult result = _processor.BookDesk(_request);

            // Assert
            //Assert.NotNull(result);
            result.Should().NotBeNull();
            //Assert.Equal(_request.FirstName, result.FirstName);
            result.FirstName.Should().Be(_request.FirstName);
            //Assert.Equal(_request.LastName, result.LastName);
            result.LastName.Should().Be(_request.LastName);
            //Assert.Equal(_request.Email, result.Email);
            result.Email.Should().Be(_request.Email);
            //Assert.Equal(_request.Date, result.Date);
            result.Date.Should().BeSameDateAs(_request.Date);
        }

        [Fact]
        public void ShouldThrowExceptionIfRequestIsNull()
        {
            // Assert
            //var exception = Assert.Throws<ArgumentNullException>(
            //    () => _processor.BookDesk(null));
            Action act = () => _processor.BookDesk(null);

            act.Should().Throw<ArgumentNullException>()
                .And
                .ParamName.Should().Be("request");

            //Assert.Equal("request", exception.ParamName);
        }

        [Fact]
        public void ShouldSaveDeskBooking()
        {
            DeskBooking savedDeskBooking = null;
            _deskBookingRepositoryMock.Setup(x => x.Save(It.IsAny<DeskBooking>()))
                .Callback<DeskBooking>(deskBooking =>
                {
                    savedDeskBooking = deskBooking;
                });

            _processor.BookDesk(_request);

            _deskBookingRepositoryMock.Verify(x => x.Save(It.IsAny<DeskBooking>()), Times.Once);

            using (new AssertionScope())
            {
                //Assert.NotNull(savedDeskBooking);
                savedDeskBooking.Should().NotBeNull();
                //Assert.Equal(_request.FirstName, savedDeskBooking.FirstName);
                savedDeskBooking.FirstName.Should().Be(_request.FirstName);
                //Assert.Equal(_request.LastName, savedDeskBooking.LastName);
                savedDeskBooking.LastName.Should().Be(_request.LastName);
                //Assert.Equal(_request.Email, savedDeskBooking.Email);
                savedDeskBooking.Email.Should().Be(_request.Email, because: "Email address must be correct");
                //Assert.Equal(_request.Date, savedDeskBooking.Date);
                savedDeskBooking.Date.Should().BeSameDateAs(_request.Date);
                //Assert.Equal(_availableDesks.First().Id, savedDeskBooking.DeskId);
                savedDeskBooking.DeskId.Should().Be(_availableDesks.First().Id);
            }
        }

        [Fact]
        public void ShouldNotSaveDeskBookingIfNoDeskIsAvailable()
        {
            _availableDesks.Clear();

            _processor.BookDesk(_request);

            _deskBookingRepositoryMock.Verify(x => x.Save(It.IsAny<DeskBooking>()), Times.Never);
        }

        //Data driven test
        [Theory]
        [InlineData(DeskBookingResultCode.Success, true)]
        [InlineData(DeskBookingResultCode.NoDeskAvailable, false)]
        public void ShouldReturnExpectedResultCode(
            DeskBookingResultCode expectedResultCode, bool isDeskAvailable)
        {
            if (!isDeskAvailable)
            {
                _availableDesks.Clear();
            }

            var result = _processor.BookDesk(_request);

            Assert.Equal(expectedResultCode, result.Code);
        }

        [Theory]
        [InlineData(5, true)]
        [InlineData(null, false)]
        public void ShouldReturnExpectedDeskBookingId(
            int? expectedDeskBookingId, bool isDeskAvailable)
        {
            if (!isDeskAvailable)
            {
                _availableDesks.Clear();
            }
            else
            {
                _deskBookingRepositoryMock.Setup(x => x.Save(It.IsAny<DeskBooking>()))
                    .Callback<DeskBooking>(deskbooking =>
                    {
                        deskbooking.Id = expectedDeskBookingId.Value;
                    });
            }

            var result = _processor.BookDesk(_request);

            Assert.Equal(expectedDeskBookingId, result.DeskBookingId);
        }
    }
}
