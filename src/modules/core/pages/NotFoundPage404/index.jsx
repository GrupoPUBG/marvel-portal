import './styles.scss';

const img = require.context('@/assets/images', true);


const NotFoundPage404 = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className='col align-self-center'>
            <h1>404 PAGE NOT FOUND</h1>
            <br />
            <h2>Not even the Eye of Uatu sees your request...</h2>
            <br />
            <p>Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.</p>
          </div>
          <div className='col'>
            <img
              className="mvl-featuredCharacters-card__imageNw"
              src={img(`./black-widow-char.e296fbe1.jpg`)}
              alt="imagen de Black Widow"
            />
            <img
              className="mvl-featuredCharacters-card__imageNo"
              src={img(`./black-widow-eye.d8a46f86.png`)}
              alt="imagen de ojo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage404;
