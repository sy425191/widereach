import Ffmpeg from "fluent-ffmpeg";
import ffmpegStatic from "ffmpeg-static";


Ffmpeg.setFfmpegPath(ffmpegStatic);

export { Ffmpeg }