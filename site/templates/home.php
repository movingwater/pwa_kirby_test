<!DOCTYPE html>
<html class="js no-touchevents" lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progressive Web App - Test</title>
    <?= css('assets/css/style.css') ?>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,600,300italic,600italic" rel="stylesheet" type="text/css">
    <link rel="manifest" href="<?= url('manifest.json') ?>">
    <meta name="theme-color" content="#29BDBB">
    <link rel="icon" sizes="192x192" href="<?= url('launcher-icon-8x.png') ?>">
</head>

<body>
    <header>
        <div class="content">
            <h3>Test</h3>
        </div>
    </header>
    <div class="container">
        <div id="main" class="content">
            <ul class="arrivals-list" data-bind="foreach: arrivals">
                <li class="item">
                    <span class="image" data-bind="html: image"></span>
                    <span class="title" data-bind="html: title"></span>
                    <span class="date" data-bind="markdown: text"></span>
                    <span class="url" data-bind="html: url"></span>
                </li>
            </ul>
        </div>
    </div>
    <?= js('assets/js/build/vendor.min.js') ?>
    <?= js('assets/js/build/script.min.js') ?>
</body>

</html>
