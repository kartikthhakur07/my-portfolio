function PhotoStrip() {
  return (
    <section className="photo-strip">
      <div className="photo-strip-inner">
        <h3>A glimpse of the person behind the code ✨</h3>
        <div className="photo-strip-grid">
          {/* Large photo on the left — outdoor wall, confident */}
          <img
            src="/photos/photo2.jpg"
            alt="Kartik Thakur outdoor"
            className="strip-photo"
          />

          {/* Two stacked photos — middle column */}
          <div className="strip-photo-col">
            <img
              src="/photos/photo3.jpg"
              alt="Kartik looking up at trees"
              className="strip-photo"
            />
            <img
              src="/photos/photo4.jpg"
              alt="Kartik golden hour"
              className="strip-photo"
            />
          </div>

          {/* Two stacked photos — right column */}
          <div className="strip-photo-col">
            <img
              src="/photos/photo5.jpg"
              alt="Kartik at Qutub Minar"
              className="strip-photo"
            />
            <img
              src="/photos/photo1.jpg"
              alt="Kartik indoor presentation"
              className="strip-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoStrip;
