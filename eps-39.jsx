class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: "Jeff",
          online: true,
        },
        {
          username: "Alan",
          online: false,
        },
        {
          username: "Mary",
          online: true,
        },
        {
          username: "Jim",
          online: false,
        },
        {
          username: "Sara",
          online: true,
        },
        {
          username: "Laura",
          online: true,
        },
      ],
    };
  }

  render() {
    // Menggunakan metode filter untuk menyaring pengguna yang sedang online
    const usersOnline = this.state.users.filter((user) => user.online === true); // Mengubah kode di sini
    // Menggunakan metode map untuk membuat elemen list item dari pengguna yang sedang online
    const renderOnline = usersOnline.map((user) => (
      <li key={user.username}>{user.username}</li>
    )); // Mengubah kode di sini
    return (
      <div>
        {/* Judul untuk daftar pengguna yang online */}
        <h1>Current Online Users:</h1>
        {/* Menampilkan daftar pengguna yang online dalam elemen unordered list */}
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
