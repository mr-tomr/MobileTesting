var bault = Java.use("org.seec575.securenotes.Vault");
vault.getPassword.implementation = funtion()
{
  var password = this.getPassword();
  console.log("Password: " + password);
  return password;
}
