<html>
<head><title>Create DB</title></head>
<body>

<?php

  $dbFile = 'login.sql';
  if (file_exists($dbFile)) {
     echo("The file <code>$dbFile</code> exists. It is going to be deleted.<p>");
     unlink($dbFile);
  }

  echo ("Is it gonna make the fuckin database?");
  $pdo = (new SQLiteConnection())->connect();
  echo ("made a new database");


?>

<a href='02_create_table.html'>create a table</a>

</body>
</html>