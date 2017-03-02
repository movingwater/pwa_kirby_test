<?php

//if(!r::ajax()) go(url('error'));

header('Content-type: application/json; charset=utf-8');

$data = $pages->find('blog')->children()->visible()->flip();
$json = array();

foreach($data as $article) {

  $json[] = array(
    'url'   => (string)$article->url(),
    'title' => (string)$article->title(),
    'text'  => (string)$article->text(),
    'image'  => (string)$article->image()->crop(100),
  );

}
echo json_encode($json);
?>
