

using kernys.Library.Core.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Kernys.Library.Repository.Data{


public class LibraryDbContext:IdentityDbContext<LibraryUser>
{


public LibraryDbContext(DbContextOptions<LibraryDbContext> options):
     base(options)
{
}

        protected override void OnModelCreating(ModelBuilder mb)
        {
            mb.Entity<AuthorBook>()
                .HasKey(x => new { x.AuthorId, x.BookId });

            mb.Entity<AuthorBook>()
                 .HasOne(x => x.Book)
                 .WithMany(x => x.AuthorBooks)
                 .HasForeignKey(x => x.BookId);

            mb.Entity<AuthorBook>()
                 .HasOne(x => x.Author)
                 .WithMany(x => x.AuthorBooks)
                 .HasForeignKey(x => x.AuthorId);

            base.OnModelCreating(mb);
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Publisher> Publishers { get; set; }
        public DbSet<AuthorBook> AuthorBooks { get; set; }

    }


}