
const RegisterPage = () => {


    const handleUsername = () => {
        // Your logic for handling username
    };
    
      const handleNFTMint = () => {
        // Your logic for minting an NFT ad
      };

    return (
        <div>
          <h2>Registering now beep......</h2>
          <form>
            <label htmlFor="username">
              <span>Username: </span>
              <input type="text" name="username" id="username" />
            </label>
            <a>Need a username? 🩶</a>
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
            <a>Or would you like to mint an NFT?</a>
            <button>submit</button>
          </form>
        </div>
      );
}

export default RegisterPage