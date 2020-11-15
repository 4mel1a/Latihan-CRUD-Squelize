const express = require("express")
const models = require("./models")
const app = express()

app.use(express.json())

// ----------- Buku -----------------------
app.get("/", (req, res) =>{
    res.send({
        messages : "success",
        body : "hore berhasil"
    })
})

app.get("/buku", (req, res) => {
    models.Buku.findAll().then((buku) => {
        res.send(buku)
    })
})

app.post("/buku", (req, res) => {
    models.Buku.create({
        title : req.body.title,
        year : req.body.year
    }).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
})
// ------------------------------------------

// ---------- Data Siswa --------------------
app.get("/data", (req, res) => {
    res.send({
        messages: "success",
        body: "mantapu jiwaa"
    })
})

app.get("/siswa", (req, res) => {
    models.siswa.findAll().then((data_siswa) => {
        res.send(data_siswa)
    })
})

app.post("/siswa", (req, res) => {
    models.siswa.create({
        nis : req.body.nis,
        nama_siswa : req.body.nama_siswa,
        kelas : req.body.kelas,
        jurusan : req.body.jurusan,
        sekolah : req.body.sekolah,
        alamat : req.body.alamat
    }).then((data_siswa) => {
        res.send(data_siswa)
    }).catch((error) => {
        res.send(error)
    })
})

// ------------------------------------------

app.listen(7000, ()=> {
    console.log("Berhasil");
})