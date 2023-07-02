FROM golang:1.20.5-alpine3.17 AS Builder
WORKDIR /src/app
COPY app.go .
RUN  go build -o /app app.go

FROM scratch
COPY --from=builder /app /app
CMD ["/app"]