const textAreaStyles = {
  width: 235,
  margin: 5,
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Menginisialisasi state untuk menyimpan input pengguna dan daftar tugas
    this.state = {
      userInput: "", // Inisialisasi input pengguna kosong
      toDoList: [], // Inisialisasi daftar tugas kosong
    };
    // Binding method ke instance kelas
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Method untuk menangani pengiriman formulir
  handleSubmit() {
    // Memisahkan input pengguna menjadi array berdasarkan koma
    const itemsArray = this.state.userInput.split(",");
    // Mengatur state toDoList menjadi array yang berisi item-item yang dipisahkan
    this.setState({
      toDoList: itemsArray,
    });
  }

  // Method untuk menangani perubahan input pengguna
  handleChange(e) {
    // Mengatur state userInput sesuai dengan nilai input pengguna
    this.setState({
      userInput: e.target.value,
    });
  }

  render() {
    // Membuat elemen list item dari array toDoList menggunakan metode map
    const items = this.state.toDoList.map((i) => <li>{i}</li>); // Mengubah kode di sini
    return (
      <div>
        {/* Input area untuk pengguna memasukkan tugas yang dipisahkan oleh koma */}
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"
        />
        <br />
        {/* Tombol untuk membuat daftar tugas berdasarkan input */}
        <button onClick={this.handleSubmit}>Create List</button>
        {/* Judul untuk daftar tugas */}
        <h1>My "To Do" List:</h1>
        {/* Daftar tugas yang dibuat */}
        <ul>{items}</ul>
      </div>
    );
  }
}
