import app from './app';
import { TimeSchedule } from './helper/scheduler';
const port: any = process.env.PORT || 3006;

new app().start(port)
  .then((port) => {
    // TimeSchedule();
    console.log(`Server running on port ${port}`)
    console.time('Database Connection Time');
  })
  .catch(error => {
    console.log(error)
    process.exit(1);
  });