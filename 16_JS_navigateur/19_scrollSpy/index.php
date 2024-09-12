<!DOCTYPE html>
<html>

<head>
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>

<body>
  <nav>
    <?php for ($i = 1; $i <= 4; $i++): ?>
      <a href="#section<?= $i ?>">Section <?= $i ?></a>
    <?php endfor ?>
    <a href="constact.html">Contact</a>
  </nav>
  <hr>
  <main>
    <?php for ($i = 1; $i <= 4; $i++): ?>
      <section id="section<?= $i ?>" data-spy>
        Section <?= $i ?>
      </section>
    <?php endfor ?>
  </main>
</body>

</html>
