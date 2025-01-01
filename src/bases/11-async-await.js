//async

const getImagen = async () => {
 
  try {

  const apiKey = 'fBtDbmpeGSlC1qF8hCTYlI9AFi1wX9Rc'; 

  const Resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

  const {data} = await Resp.json();

  const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
 }
 catch (error) {
   console.error(error);
 }
};

getImagen();

