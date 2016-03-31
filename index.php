<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Bradesco | Responsivo</title>
	<link rel="stylesheet" href="app/css/main.css">
	<link rel="stylesheet" href="app/libs/bootstrap/dist/css/bootstrap.min.css">
</head>
<div class="container">
	<header>
		<img src="app/img/marca.png" alt="">
	</header>

	<section class="slide">
      <div class="slide_nav">
          <div class="slide_nav_item b"><</div>
          <div class="slide_nav_item g">></div>
      </div>

      <?php
        $pager = array();
        for ($i = 1; $i <= 4; $i++):
          $slide = str_pad($i, 2, 0, STR_PAD_LEFT);
          $first = ($i == 1 ? ' first' : '');
          $active = ($i == 1 ? ' active' : '');
          $pager[$i] = "<span class='{$active}' id='" . ($i - 1) . "'>{$i}</span>"
          ?>

          <article class="slide_item<?= $first; ?>">
              <img src="app/img/slide.jpg" alt="" title="SLIDE">
              <div class="slide_item_desc">
                  <h1>Slide <?= $slide; ?></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              </div>
          </article>

      <?php endfor; 
        echo "<div class='control'>". implode(' ', $pager) . "</div>";
      ?>
  </section>


</div>
<script src="app/libs/jquery/dist/jquery.js"></script>
<script src="app/libs/slide/slide.js"></script>

</html>