function Header() {

    return (
        <>
        
            <h1 className="text-3xl font-bold underline text-center">Welcome to Discord Streamer</h1>
            <p className="ml-2 text-gray-700">The bot streams messages from the Discord Channel: <strong>general</strong> and displays them here. </p>
            <p className="ml-2 text-gray-700">On initial loading it will fetch the <strong>last 100 messages</strong></p>
            <p className="ml-2 text-gray-700">Please <a href="https://discord.gg/NXPx5BvU" className="text-blue-500 underline hover:text-blue-800">join</a> the server to see it in action</p>
        </>
    )
}

export default Header;