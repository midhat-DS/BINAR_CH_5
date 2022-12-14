const express = require("express");
const path = require("path");
const axios = require('axios').default;
const uploadOnMemory = require("./uploadOnMemory");
const cloudinary = require("./cloudinary");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
const PORT = process.env.PORT || 8000;
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get('/', async (req, res) => {
    try {
        const cars = await axios.get('http://localhost:8001/cars');
        res.render('index', cars.data)
    } catch (err) {
        res.status(500).json(err)
    }
})
app.get("/add", (req, res) => {

    res.render("add");
});
app.post(
    "/add-car",
    uploadOnMemory.single("foto"),
    (req, res) => {
        const fileBase64 = req.file.buffer.toString("base64");
        const file = `data:${req.file.mimetype};base64,${fileBase64}`;

        cloudinary.uploader.upload(file, { folder: 'test' }, async function (err, result) {
            if (!!err) {
                console.log(err);
                return res.status(400).json({
                    message: "Gagal upload file!",
                });
            }

            const body = req.body;
            body.foto = result.url;
            try {
                const users = await axios.post('http://localhost:8001/cars', body);
                return res.redirect("/")
            } catch (err) {
                return res.status(500).json(err)
            }
        });
        console.log(req);
    }
);
    app.get('/update/:id', async (req, res) => {
        try {
            const id = req.params.id;
    
            const cars = await axios.get(`http://localhost:8001/cars/${id}`);
            res.render('edit', cars.data)
        } catch (err) {
            res.status(500).json(err)
        }
    })
    
    app.post(
        "/update/:id",
        uploadOnMemory.single("foto"),
        (req, res) => {
            const fileBase64 = req.file.buffer.toString("base64");
            const file = `data:${req.file.mimetype};base64,${fileBase64}`;
    
            cloudinary.uploader.upload(file, { folder: 'test' }, async function (err, result) {
                if (!!err) {
                    console.log(err);
                    return res.status(400).json({
                        message: "Gagal upload file!",
                    });
                }
    
                const id = req.params.id;
                const body = req.body;
                body.image = result.url;
                try {
                    const cars = await axios.put(`http://localhost:8001/cars/${id}`, body);
                    return res.redirect("/")
                } catch (err) {
                    return res.status(500).json(err)
                }
            });
        }
    );

app.get('/add-car', (req, res) => {
    res.render('add')
})


app.get('/delete-car/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const users = await axios.delete(`http://localhost:8001/cars/${id}`);
        res.redirect("/")
    } catch (err) {
        res.status(500).json(err)
    }
})

app.use("/", (req, res) => {
  res.status(404);
  res.send("Halaman yang anda cari tidak ditemukan!");
});

app.listen(PORT, () => {
  console.log("Berhasil! Silahkan akses http://localhost:%d", PORT);
});