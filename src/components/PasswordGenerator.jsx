import {useCallback, useEffect, useState} from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [allowSpecial, setAllowSpecial] = useState(false);

  const generatePassword = useCallback(() => {
    let allowedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    if (allowSpecial)
      allowedCharacters += `~!@#$%^&*()_+}{":><?`

    let newPassword = "";
    for (let index = 0; index < length; index++) {
      const charIndex = Math.floor(Math.random() * allowedCharacters.length + 1);
      newPassword += allowedCharacters.charAt(charIndex);
    }
    setPassword(newPassword);
  }, [length, allowSpecial]);

  useEffect(() => {
    generatePassword();
  }, [length, allowSpecial, generatePassword]);

  return (<>
    <input value={password} readOnly></input>
    <div>
      <input type="range" min={3} max={50} defaultValue={length}
        onChange={(e) => setLength(+e.target.value)}>
      </input>
      <label>Password Length {length}</label>
    </div>

    <div>
      <input value={allowSpecial} id="allow-special" type="checkbox"
        onChange={(e) => setAllowSpecial(preVal => !preVal)}
      />
      <label labelfor="allow-special">Allow Special Characters</label>
    </div>
  </>)
}

export default PasswordGenerator;