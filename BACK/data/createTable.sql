-- toutes les tables seront en minuscule et au singulier
--chaque table contiendra un champs created_at contenant la date de création d'un enregistrement

BEGIN 
--déclare le début d'une transaction: un groupe d'instruction SQL qui rend celles-ci indépendantes les unes des autres
--si une instructions génère une heure alors toutes les commandes sont invalidées

--création de table donc on s'assure que celles-ci soient biens supprimées avant d'être créees
--on peut supprimer plusieurs tables à la fois 

DROP TABLE IF EXISTS ''