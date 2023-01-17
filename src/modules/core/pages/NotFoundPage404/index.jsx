import './styles.scss';

const img = require.context('@/assets/images', true);


const NotFoundPage404 = () => {
  return (
    <>
      <h1>404 PAGE NOT FOUND</h1>
      <h2>Not even the Eye of Uatu sees your request...</h2>
      <p>Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.</p>
      <img
        className="mvl-featuredCharacters-card__imageN"
        src={img(`./black-widow-char.e296fbe1.jpg`)}
        alt="imagen de Black Widow"
      />
      <img
        className="mvl-featuredCharacters-card__imageN"
        src={img(`./black-widow-eye.d8a46f86.png`)}
        alt="imagen de ojo"
      />

    </>
  );
};

export default NotFoundPage404;
