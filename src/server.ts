import { app as server } from "./app";

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});
