const timeMiddleware = (req, res, next) => {
    const date = new Date();
  
    const day = date.getDay();
    const hour = date.getHours();
  
    // Monday = 1 / Friday = 5
    const isWorkingDay = day >= 1 && day <= 5;
  
    // Between 9 and 17
    const isWorkingHour = hour >= 9 && hour < 17;
  
    if (isWorkingDay && isWorkingHour) {
      next();
    } else {
      res.send(`
        <h1>Website unavailable</h1>
        <p>Available only Monday to Friday from 9AM to 5PM</p>
      `);
    }
  };
  
  module.exports = timeMiddleware;