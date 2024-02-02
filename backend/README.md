GET "/"  : Cette route permet de récupérer toutes les todo a faire . Lorsqu'un utilisateur effectue une requête GET à la racine de l'API, la fonction getToDo du contrôleur est appelée pour renvoyer la liste des todos.

POST "/save" (savetodo) : Cette route permet d'ajouter une nouvelle tache. Lorsqu'un utilisateur effectue une requête POST à la racine de l'API, la fonction saveToDo du contrôleur est appelée pour enregistrer cette publication dans la base de données.

 "/updateToDo" (updateToDo) : Cette route permet de modifier une publication existante. L'utilisateur doit fournir l'identifiant de la tache qu'il souhaite modifier dans l'URL, et les nouvelles données de la tache (TEXT) dans le corps de la requête. La fonction updateToDo du contrôleur est alors appelée pour effectuer la modification.

DELETE "/delete" (deleteTache) : Cette route permet de supprimer une tache existante. L'utilisateur doit fournir l'identifiant de la tache à supprimer . La fonction deleteToDo du contrôleur est appelée pour supprimer la tache correspondante de la base de données.

