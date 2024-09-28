import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="time">8 am</td>
                    <Event event='fancy dinner 🎩' color='green' location='Maple & Ash'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">9 am</td>
                    <td></td>
                    <td></td>
                    <Event event='Architecture🏙' color='blue' location='Downtown'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">10am</td>
                </tr>

                <tr>
                    <td className="time">11am</td>
                </tr>

                <tr>
                    <td className="time">12pm</td>
                </tr>

                <tr>
                    <td className="time">1pm</td>
                </tr>

                <tr>
                    <td className="time">2pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='tour' color="pink" location="sids house" />
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>


            </tbody>
        </table>
    </div>
  )
}

export default Calendar;