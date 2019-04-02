export default function (app: any) {
  app.use("/main", require("./main"));
  app.use("/api", require("./api"));
}