const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async db => {
  await saveOrphanage(db, {
    lat: "-27.5913807",
    lng: "-48.5301734",
    name: "Lar das Meninas",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: 489999080864,
    images: [
      "https://images.unsplash.com/photo-1600720642653-529b16872835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1582167410766-a90eea4787ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0"
  })

  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  // console.log(orphanage);

  // console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
});
