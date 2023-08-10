
const RegisterPage = () => {


    const handleUsername = () => {
        // Your logic for handling username
    };
    
      const handleNFTMint = () => {
        // Your logic for minting an NFT
      };

    return (
        <div>
          <h2>Registering now beep......</h2>
          <form>
            <label htmlFor="username">
              <span>Username: </span>
              <input type="text" name="username" id="username" />
            </label>
            <button onClick={handleUsername}>Need a username? 🩶</button>
            <label htmlFor="password">
              <span>Password: </span>
              <input type="password" id="password" />
            </label>
            <label htmlFor="email">
              <span>Email: </span>
              <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="userProfile">
              <span>Profile Image:</span>
              <input type="file" />
            </label>
            <button onClick={handleNFTMint}>Or would you like to mint an NFT?</button>
          </form>
        </div>
      );
}

export default RegisterPage