using DeskBooker.Core.DataInterface;
using DeskBooker.Core.Domain;
using System;
using System.Linq;

namespace DeskBooker.Core.Processor
{
    public class DeskBookerRequestProcessor
    {
        public readonly IDeskBookRepository _deskBookRepository;
        public readonly IDeskRepository _deskRepository;

        public DeskBookerRequestProcessor(IDeskBookRepository deskBookRepository, IDeskRepository deskRepository)
        {
            _deskBookRepository = deskBookRepository;
            _deskRepository = deskRepository;
        }

        public DeskBookingResult BookDesk(DeskBookingRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException(nameof(request));
            }

            var availableDesks = _deskRepository.GetAvailableDesks(request.Date);
            if (availableDesks.Count() > 0)
            {
                _deskBookRepository.Save(Create<DeskBooking>(request));
            }

            return Create<DeskBookingResult>(request);
        }

        private static T Create<T>(DeskBookingRequest request) where T : DeskBookingBase, new()
        {
            return new T
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                Date = request.Date
            };
        }
    }
}