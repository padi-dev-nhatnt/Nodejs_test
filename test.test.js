import db from './src/models/index'
import resolvers from "./src/resolver/resolver"
import a from "./src/schema/schema"
function compileAndroidCode() {
  throw new Error('notNull Violation: Book.tacGia cannot be null');   
}
test('notNull Violation: Book.tacGia cannot be null', async () => {
  try {
    const input = {
        nameBook: "nhat",
        namSX:"2022",
        nhaXuatBan:"2022",
    }
     await resolvers.Mutation.createBook(a,input,db)
  }
  catch (e) {
    expect(e.message).toBe('notNull Violation: Book.tacGia cannot be null')
  }
  });
  
