package main

import "net/http"

func main(){
	http.HandleFunc("/", Hello)
	http.ListenAndServe(":80", nil)
}

func Hello(w http.ResponseWriter, r *http.Request){
	w.Writer([]byte("<h1>Hello Full Cycle</h1>"))
}