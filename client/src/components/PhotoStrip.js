function PhotoStrip() {
  return (
    <section className="photo-strip">
      <div className="photo-strip-inner">
        <h3>A glimpse of the person behind the code ✨</h3>
        <div className="photo-strip-grid-3">
          <img
            src="/photos/photo3.jpg"
            alt="Kartik looking up at trees"
            className="strip-photo"
          />
          <img
            src="/photos/photo4.jpg"
            alt="Kartik golden hour"
            className="strip-photo strip-photo-tall"
          />
          <img
            src="/photos/photo5.jpg"
            alt="Kartik at Qutub Minar"
            className="strip-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default PhotoStrip;
