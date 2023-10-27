const fs = require("fs"); // responsável por lidar com manipulação de arquivos. nativo do próprio NODE
const path = require("path"); //para lidar com a navegação entre os diretórios
const uploadConfig = require("../configs/upload");

class DiskStorage {
  async saveFile(file){
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    );

    return file;
  }

  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);
    try{
      await fs.promises.stat(filePath)
    }catch{
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

module.exports = DiskStorage;
