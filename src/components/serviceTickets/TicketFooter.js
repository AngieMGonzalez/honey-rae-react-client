import "./Tickets.css"
import { ticketStatus } from "./TicketStatus"

export const TicketFooter = ({ ticket }) => {

  // // FIX THIS ticketStatus() duplicate in Ticket.js
  // // and in TicketFooter.js
  // const ticketStatus = () => {
  //   if (ticket.date_completed === null) {
  //     if (ticket.employee) {
  //       return <span className="status--in-progress">In progress</span>
  //     }
  //     return <span className="status--new">Unclaimed</span>
  //   }
  //   return <span className="status--completed">Done</span>
  // }

  return <footer className="ticket__footer">
    <div className="ticket__employee">
      {
        ticket.date_completed === null
          ? `Assigned to ${ticket?.employee?.full_name ?? "no one, yet"}`
          : `Completed by ${ticket?.employee?.full_name} on ${ticket.date_completed}`
      }
    </div>
    <div> {ticketStatus(ticket)} </div>
  </footer>
}
