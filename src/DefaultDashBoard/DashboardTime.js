const DashboardTime = () => {
  const currentDate = new Date();

  // Format date and time using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(currentDate);

  return (
    <div className="flex justify-center">
      <p className="text-gray-500">{formattedDate}</p>
    </div>
  );
};

export default DashboardTime;
