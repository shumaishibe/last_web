export async function fetchImages(code) {
  const ert=code;
    const response = await fetch(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${code}`
    );
    const data = await response.json();
    // alert(data.results[0].address1);
    // alert("a");
    // const name=data.results[0].address1;
    // name+=data.results[1].address2;
    // name+=data.results[2].address3;
    document.getElementById('print').innerHTML=data.results[0].address1;
    document.getElementById('print').innerHTML+=data.results[0].address2;

    document.getElementById('print').innerHTML+=data.results[0].address3;

    // return (data.results[0].address1);
  }