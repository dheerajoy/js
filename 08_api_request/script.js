const xhr = new XMLHttpRequest();
const requestUrl = "https://randomuser.me/api/";

xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    // console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.results);
  }
};
xhr.send();
