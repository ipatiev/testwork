<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once __DIR__ . '/vendor/autoload.php';

$artists = [];

for ($i = 0; $i < 25; $i++) {
    $faker = Faker\Factory::create();
    $artists[] = $faker->name();
}


$genres = [
    'Blues',
    'Electronic',
    'Folk',
    'Hip hop',
    'Jazz',
    'Pop',
    'Rock',
];

$id = 1;
$tracks = [];

for ($i = 0; $i < 200; $i++) {
    $faker = Faker\Factory::create();
    $tracks[] = [
        'id'     => $id,
        'name'   => $faker->text(30),
        'artist' => $artists[array_rand($artists)],
        'genre'  => $genres[array_rand($genres)],
        'year'   => $faker->year(),
    ];
    $id++;
}

echo json_encode($artists);
echo PHP_EOL;
echo PHP_EOL;
echo json_encode($genres);
echo PHP_EOL;
echo PHP_EOL;
echo json_encode($tracks);