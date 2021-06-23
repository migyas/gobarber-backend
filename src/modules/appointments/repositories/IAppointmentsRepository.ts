import ICreateAppointment from '../dtos/ICreateAppointmentDTO';
import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointment): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
