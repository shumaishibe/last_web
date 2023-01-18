import { useEffect} from "react";
import { fetchImages } from "./api";
function Main(){
  let code=null;
    document.addEventListener('click',function(ev){
      var el =ev.target;
      if(el.matches('#adbutton')){
        // alert("a");
        code=document.getElementById("coment").value;
        fetchImages(code);
        // code="1560041";
        // useEffect(() => {
        //   fetchImages(code).then((urls) => {
        //   });
        // }, []);
        // alert(code);
      }
    },);
    // useEffect(() => {
    //   fetchImages(code).then((urls) => {
    //     console.log(urls);
    //   });
    // }, []);

}
function App() {
    return (
        <div>
          <main>
            {/* <section>
              <figure>
                <img
                  src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
                  alt="cute dog"
                />
              </figure>
            </section> */}
            <Main />
          </main>
          {/* <footer>
            <p>Dog images are retrieved from Dog API</p>
            <p>
              <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
            </p>
          </footer> */}
        </div>
      );
  }
  
  export default App;
