export default function BookingEmail({ name }: { name: string }) {
  return (
    <html lang="en">
      <h1>Booking Confirmation Email</h1>
      <p>Hi {name},</p>
      <p>Your booking has been confirmed.</p>
    </html>
  );
}
