import app from './app';
const port: any = process.env.PORT || 4001;

new app().start(port)
  .then((port) => {
    console.log(`Server running on port ${port}`)
    console.time('Database Connection Time');
  })
  .catch(error => {
    console.log(error)
    process.exit(1);
  });