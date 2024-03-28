
function Header() {
  return (
    <>
    <div className="grid place-items-center">
      <img
        alt="app logo"
        src="logo-app.png"
        className="w-16 h-16 rounded-full ml-14 mt-2"
      />
      </div>

      <h1 className="text-3xl font-bold text-center">
        Welcome to Discord Streamer
      </h1>
      <p className="text-gray-700 text-center">
        The bot streams messages from the Discord Channel:{" "}
        <strong>general</strong> and displays them here.{" "}
      </p>
      <p className="text-gray-700 text-center">
        On initial loading it will fetch the <strong>last 100 messages.</strong>
        Please{" "}
        <a
          href="https://discord.gg/NXPx5BvU"
          className="text-blue-500 underline hover:text-blue-800"
        >
          join
        </a>{" "}
        the server to see it in action.
      </p>
    </>
  );
}

export default Header;
