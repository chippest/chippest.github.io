<?php
    include("database.php");
    $songID= array();
    $songName = array();
    $singerName = array();
    $uploader = array();
    $accent = array();
    $query = "select * from songs";
    $result = mysqli_query($conn, $query);
    while($row = mysqli_fetch_assoc($result)){
        array_push($songID, $row["songID"]);
        array_push($songName, $row["songName"]);
        array_push($singerName, $row["singerName"]);
        array_push($uploader, $row["uploader"]);
        array_push($accent, $row["accent"]);
    }
    mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chipp's Player</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/d8baa3cb86.js" crossorigin="anonymous"></script>
</head>
<body onresize="refresh()">

    
    
    <div id="bodyContainer" class="column">

            <div id="rcont" class="row">
                <div id="leftContainer" class="column">
                    <div id="playingInfo" class="column">
        
                        <!-- SONG TITLE-INFORMATION -->
                        <img src="https://lets.linkpc.net/music/jpg/1.jpg" id="playingIcon">
                        <div id="playingText" class="column">
                            <strong id="ptTitle">Thousand Miles</strong>
                            <span id="ptSinger">the Kid LAROI</span>
                        </div>    
                        <div id="audioDiv" class="column">   
                            <!-- AUDIO FILE -->
                            <div id="playingSeekBar" class="row">
                                <div id="audioB" class="column">
                                    <div class="audioC row">
                                        <button id="shufButton"><i class="fa-solid fa-shuffle"></i></button>
                                        <button id="repButton"><i class="fa-solid fa-repeat"></i></button>
                                        <button id="autoButton"><i class="fa-solid fa-circle-play"></i></button>
                                    </div>
                                    <div class="audioC audioO row">
                                        <audio id="audioFile" src="https://lets.linkpc.net/songs/1.mp3" controlsList="nodownload noplaybackrate"></audio>
                                        <span id="currentTime">00:00</span>
                                        <input type="range" name="" id="audioSlider" class="input" value="0">
                                        <span id="totalTime">00:00</span>
                                    </div>
                                    <div class="audioC">
                                        <i class="fa-solid fa-volume-low" id="mutebutton"></i>
                                        <input type="range" class="input" name="" id="volSlider" value="100">
                                        <i class="fa-solid fa-volume-high"></i>
                                    </div>
                                </div>
                                <button id="sectionOne"><i class="fa-solid fa-sliders"></i></button>
                            </div>
            
                            <!-- AUDIO FUNCTIONS -->
                            <div id="playingControls" class="row">
                                <button id="upButton"><i class="fa-solid fa-chevron-up"></i></button>
                                <button id="prevButton"><i class='fa-solid fa-backward-step'></i></button>
                                <button id="playButton"><i class='fa-solid fa-play'></i></button>
                                <button id="nextButton"><i class='fa-solid fa-forward-step'></i></button>
                                <button id="volSectionButton"><i class='fa-solid fa-volume-high'></i></button>
                            </div>
                        </div> 
        
                    </div>
                </div>
                <div class="rcontmain row songAlbum">
                    <div id="songList" class="column">
                    </div>
                    <span class="songVert">Select The Song Of Your Choice</span>
                </div>
            </div>

    </div>

    <script>
        <?php
        $js_array = json_encode($songID);
        echo "let songID = ". $js_array . ";";
        $js_array = json_encode($songName);
        echo "let songFull = ". $js_array . ";";
        $js_array = json_encode($singerName);
        echo "let singerName = ". $js_array . ";";
        $js_array = json_encode($uploader);
        echo "let uploader = ". $js_array . ";";
        $js_array = json_encode($accent);
        echo "let accent = ". $js_array . ";";
        ?>
    </script>
    <script src="script.js">
    </script>
</body>
</html>