function PhotoStrip() {
  return (
    <section className="photo-strip">
      <div className="photo-strip-inner">
        <h3>A glimpse of the person behind the code ✨</h3>
        <div className="photo-strip-grid">
          {/* Large photo on the left */}
          <img
            src="/photos/photo3.jpg"
            alt="Kartik Thakur outdoor"
            className="strip-photo"
            onError={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #f0e6d8, #d8c8b4)';
              e.target.style.minHeight = '280px';
            }}
          />

          {/* Two stacked photos on the right columns */}
          <div className="strip-photo-col">
            <img
              src="/photos/photo4.jpg"
              alt="Kartik looking up"
              className="strip-photo"
              onError={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #e8d8c4, #d0b898)';
              }}
            />
            <img
              src="/photos/photo2.jpg"
              alt="Kartik portrait"
              className="strip-photo"
              onError={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #ddd0c0, #c8b090)';
              }}
            />
          </div>

          <div className="strip-photo-col">
            <img
              src="/photos/photo5.jpg"
              alt="Kartik golden hour"
              className="strip-photo"
              onError={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #f5e8d0, #e0c898)';
              }}
            />
            <img
              src="/photos/photo1.jpg"
              alt="Kartik indoor"
              className="strip-photo"
              onError={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #ede0d0, #d8c0a0)';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoStrip;
