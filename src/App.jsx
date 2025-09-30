function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  );
}

function Einstein() {
  return (
    <img
      src="https://i.imgur.com/3aXW2g6m.jpg"
      alt="Albert Einstein"
    />
  );
}
export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

