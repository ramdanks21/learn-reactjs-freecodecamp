const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue",
];

// Function component untuk menampilkan daftar framework front-end
function Frameworks() {
  // Menggunakan metode map untuk membuat elemen list item dari array frontEndFrameworks
  const renderFrameworks = frontEndFrameworks.map(
    (item) => <li key={item}>{item}</li> // Key diperlukan untuk membantu React mengidentifikasi setiap elemen dengan unik
  );

  return (
    <div>
      {/* Judul untuk daftar framework */}
      <h1>Popular Front End JavaScript Frameworks</h1>
      {/* Menampilkan daftar framework dalam elemen unordered list */}
      <ul>{renderFrameworks}</ul>
    </div>
  );
}
