using System;
using System.Linq;
using kernys.Library.Core.Models;
using Kernys.Library.Repository.Data;

namespace kernys.Library.Repository.Data{


public class DbInitializer{


public static void Seed(LibraryDbContext context){

     if(!context.Authors.Any())         
            SaveDefaultAuthors(context);

     
     if(!context.Publishers.Any())
           SaveDefaultPublisher(context);
    
    if(!context.Books.Any())
           SaveDefaultBooks(context);


   


}

        private static void SaveDefaultBooks(LibraryDbContext context)
        {
     
                  context.AddRange(new Book{
                ISBN="1786462907",
                Title="Angular 6 for Enterprise-Ready Web Applications",
                Description="NONE",
                Language="English",
                PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/517QKVbAwUL._SX404_BO1,204,203,200_.jpg",
                Price=49.99M,
                Year=2018,
                Publisher=context.Publishers.First(),
                AuthorBooks=new System.Collections.Generic.List<AuthorBook>{
                     new AuthorBook{BookId=1, AuthorId=1}

                }
                },
         new Book{
                ISBN="1786465000",
                Title="ASP.NET Core 2 and Angular 5",
                Description="Based on the best-selling book ASP.NET Core and Angular 2",
                Language="English",
                PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/51Cnw0%2BYRKL._SX400_BO1,204,203,200_.jpg",
                Price=30.99M,
                Year=2008,
                Publisher=context.Publishers.First(),
                AuthorBooks=new System.Collections.Generic.List<AuthorBook>{
                     new AuthorBook{BookId=2, AuthorId=1},
                     new AuthorBook{BookId=2, AuthorId=2}


                } 
                 },
        new Book{
                ISBN="1786462907",
                Title="T-SQL Fundamentals (3rd Edition)",
                Description="Master T-SQL fundamentals and write robust code for Microsoft SQL Server and Azure SQL Database. Itzik Ben-Gan explains key T-SQL concepts and helps you apply your knowledge with hands-on exercises. The book first introduces T-SQL’s roots and underlying logic.",
                Language="English",
                PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/41HbPnGDM9L._SX408_BO1,204,203,200_.jpg",
                Price=70.99M,
                Year=2000,
                Publisher=context.Publishers.Last(),
                AuthorBooks=new System.Collections.Generic.List<AuthorBook>{
                     new AuthorBook{BookId=3, AuthorId=4},
                     new AuthorBook{BookId=3, AuthorId=3}


                } 
                   },
                new Book{
                ISBN="1786462907",
                Title="T-SQL Fundamentals (3rd Edition)",
                Description="Master T-SQL fundamentals and write robust code for Microsoft SQL Server and Azure SQL Database. Itzik Ben-Gan explains key T-SQL concepts and helps you apply your knowledge with hands-on exercises. The book first introduces T-SQL’s roots and underlying logic.",
                Language="English",
                PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/41HbPnGDM9L._SX408_BO1,204,203,200_.jpg",
                Price=70.99M,
                Year=2000,
                Publisher=context.Publishers.First(),  AuthorBooks=new System.Collections.Generic.List<AuthorBook>{
                     new AuthorBook{BookId=4, AuthorId=3},
                 


                } 
                 },

             new Book{
                ISBN="1786462907",
                Title="T-SQL Querying (Developer Reference)",
                Description="Squeeze maximum performance and efficiency from every T-SQL query you write or tune. Four leading experts take an in-depth look at T-SQL’s internal architecture and offer advanced practical techniques for optimizing response time and resource usage. Emphasizing a correct understanding of the language and its foundations, the authors present unique solutions they have spent years developing and refining. All code and techniques are fully updated to reflect new T-SQL enhancements in Microsoft SQL Server 2014 and SQL Server 2012.",
                Language="English",
                PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/41HbPnGDM9L._SX408_BO1,204,203,200_.jpg",
                Price=25.99M,
                Year=2019,
                Publisher=context.Publishers.First(),
                  AuthorBooks=new System.Collections.Generic.List<AuthorBook>{
                     new AuthorBook{BookId=5, AuthorId=4},
                     new AuthorBook{BookId=5, AuthorId=1}


                } 
                },

                new Book{
                ISBN="1786462907",
                Title="SQL Server 2016 Reporting Services Cookbook",
                Description="Get up to speed with the newly-introduced enhancements and the more advanced query and reporting features Easily access your important data by creating visually appealing dashboards in the Power BI practical recipe Create cross-browser and cross-platform reports using SQL Server 2016 Reporting Services",
                Language="English",
                PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/51Hrfqsob6L._SX404_BO1,204,203,200_.jpg",
                Price=70.99M,
                Year=2016,
                Publisher=context.Publishers.Last(),
                  AuthorBooks=new System.Collections.Generic.List<AuthorBook>{
                     new AuthorBook{BookId=6, AuthorId=5},


                } 
                },
            new Book{
                ISBN="1786462907",
                Title="T-SQL Fundamentals (3rd Edition)",
                Description="Master T-SQL fundamentals and write robust code for Microsoft SQL Server and Azure SQL Database. Itzik Ben-Gan explains key T-SQL concepts and helps you apply your knowledge with hands-on exercises. The book first introduces T-SQL’s roots and underlying logic.",
                Language="English",
                PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/51PoRWYu0DL._SX403_BO1,204,203,200_.jpg",
                Price=15M,
                Year=1999,
                Publisher=context.Publishers.First(),
                
                  AuthorBooks=new System.Collections.Generic.List<AuthorBook>{
                     new AuthorBook{BookId=7, AuthorId=3},


                } 
                });
                
                   context.SaveChanges();

        }

        private static void SaveDefaultPublisher(LibraryDbContext context)
        {
            
            context.AddRange(
                new Publisher{
                          Name="Packt Publishing",
                          City="New York",
                          Country="USA"
                },
                new Publisher{
                          Name="New House",
                          City="Bronx",
                          Country="USA"
                }
                );
            context.SaveChanges();
                
        }

        private static void SaveDefaultAuthors(LibraryDbContext context){

context.Authors.AddRange(new Author[]{

          new Author{
                       FirstName="Doguhan",
                       PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/61P1LupTWGL._US230_.jpg",
                       LastName="Uluca",
                       Biography="Doguhan Uluca is a Software Development expert for Excella in Washington, DC. Doguhan is the founder and director of the polyglot Tech Talk DC meetup and the creator of the DC Full Stack Web Summit conference. Doguhan is the author of the book Angular 6 for Enterprise-Ready Web Applications with other publications on DevPro and ACM. He is a speaker at international conferences like Ng-Conf, Angular Mix, CodeStock, deliver:Agile and Agile XP. He is a full-stack JavaScript, Agile and Cloud engineering practitioner. Doguhan is an active contributor to the open source community with libraries and tools published for JavaScript, Angular, Node and MongoDB."
                       
                },

          new Author{
                       FirstName="Itzik ",
                       LastName="Ben-Gan",
                       PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/61P1LupTWGL._US230_.jpg",
                       Biography=@"Itzik Ben-Gan is a Mentor and Co-Founder of SolidQ. A Data Platform Microsoft MVP (Most Valuable Professional) since 1999, Itzik has delivered numerous training events around the world focused on T-SQL Querying, Query Tuning and Programming. Itzik is the author of several books including T-SQL Fundamentals Third Edition and T-SQL Querying. He has written articles for SQL Server Pro, SolidQ Journal and MSDN. Itzik's speaking activities include SQLPASS, SQLBits, SQL Nexus, SQLU, SQLTeach and various user groups around the world. Itzik is the author of SolidQ's Advanced T-SQL Querying, Programming and Tuning and T-SQL Fundamentals courses along with being a primary resource within the company for their T-SQL related activities.
For more details please visit http://tsql.solidq.com."
                },
                
                  new Author{
                       FirstName="Sylvia",
                       PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/B1HthXo1t5S._US230_.jpg",
                       LastName="Moestl Vasilik",
                       Biography=@"Hi, my name is Sylvia Moestl Vasilik. I've been a database programmer and data scientist for more than 15 years, working at organizations like Expedia, Microsoft, T-Mobile, and the Gates Foundation. But my first database related job was working in tech support for Microsoft's flagship desktop database product--MS Access, when it originally came out in the early 1990's.

In 2015, I was teaching a SQL Server Certificate course at the University of Washington Continuing Education. It was a 10 week course, and my students paid more than $1000 for it. My students learned the basics of SQL, most of the keywords, and worked through practice problems every week of the course.

But because of the emphasis on getting a broad overview of all features of SQL, we didn't spend enough time on the types of SQL that's used 95% of the time--intermediate and advanced Select statements. After the course was over, many of my students emailed me to ask where they could get more real-world problems. That's when I was inspired to start work on SQL Practice Problems.

Along with my husband Eric and two children, I live in the suburbs of Seattle, Washington, where I work on data science/business intelligence projects, and play pickleball three times a week."
                },
              new Author{
                       FirstName="John",
                       PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/41Ng2io0fjL._US230_.jpg",
                       LastName="Hales",
                       Biography=@"I have been working in the IT industry for more than 16 years and with VMware products for 12+ years. I have earned many vendor certifications over the years, from EMC, VMware, Microsoft, Novell, and CompTIA. My certifications include: VCP, VCAP, VCI, MCSE (NT 4, Windows 2000 & 2003), MCDBA, MCT, CNA, CNE, CNI, EMCSA, Network+, A+, and CTT+. I have taught, developed courses for, and consulted on many of these technologies, both for public clients and for customized, internal training for Fortune 500 companies. I have taught in North America, Europe, Asia, the Middle East, and Australia and have met with success in each location.

My experience with virtualization began with VMware Workstation and progressed through various desktop and server products and releases, becoming a strong proponent of virtualization, especially using VMware products.
Today, I teach a variety of classes for various vendors, specializing in VMware's vSphere 4 and 5, SRM, and View, Dell and EMC storage, and how applications (such as SQL and Exchange) can best exploit these technologies. 

I am the president of Hales Technologies, a company specializing in training, consulting, and solution-oriented consulting. I live in Sunrise, Florida with my wife and four children and can be contacted at johnh@halestechnologies.com. Check out my website at www.halestechnologies.org or my facebook Hales Technologies page where I post common tips and tricks for those in the computer field at www.facebook/com/halestech."
                },
              new Author{
                       FirstName="Holly",
                       PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/7151mNL7hHL._US230_.jpg",
                       LastName="Mikkelson",
                       Biography="Holly Mikkelson is a Professor of Translation and Interpreting at the Graduate School of Translation, Interpretation and Language Education, Middlebury Institute of International Studies at Monterey (www.miis.edu). She is an ATA-certified translator (Spanish>English, English>Spanish) and a state and federally certified court interpreter who has taught translation and interpreting for four decades. In addition to co-authoring Fundamentals of Court Interpretation: Theory, Policy, and Practice, she is the author of Introduction to Court Interpreting as well as the Acebo interpreter training manuals (www.acebo.com) and numerous articles on translation and interpretation. Professor Mikkelson has consulted with many government and private entities on interpreter testing and training, and has presented lectures and workshops to interpreters and related professionals throughout the world. In 2011, the American Translators Association awarded her the prestigious Alexander Gode Medal for outstanding service to the translation and interpreting "
                },
               new Author{
                       FirstName="Stephanie",
                       PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/B1RcVntcYqS._US230_.jpg",
                       LastName="Smith",
                       Biography=@"Beezix Inc. - Publishers of quick reference computer guides for trainers, training companies, corporations, and individuals across the US and Canada for all the most popular applications for the Windows, Mac, and mobile platforms. Through working with top trainers and product specialists, we've distilled years' worth of experience into these sleek, durable cheat sheets. Our cards have all the shortcuts, quick tips, and step-by-step instructions for Microsoft® Office and Mac Office products such as Outlook, Excel, PowerPoint, OneNote as well as Windows, Mac OS, iOS and many others at your fingertips. Our cards are designed for casual computer users right through to trainers and help desk staff. 

Beezix was founded by trainers, and has always had a strong focus on the learner. Extensive industry experience made us aware of the need for a line of high-quality guides that were clear, accurate and concise, leading to the creation of the first Beezix Quick Reference guides in 1994. "
                },
                new Author{
                       FirstName="Greg",
                       PhotoUrl="https://images-na.ssl-images-amazon.com/images/I/31FvBial-4L._US230_.jpg",
                       LastName="Harvey",
                       Biography=@"Greg Harvey has authored tons of computer books, the most recent being Excel Timesaving Techniques For Dummies and Roxio Easy Media Creator For Dummies, and the most popular being Excel 2003 For Dummies and Excel 2003 All-In-One Desk Reference For Dummies. He started out training business users on how to use IBM personal computers and their attendant computer software in the rough and tumble days of DOS, WordStar, and Lotus 1-2-3 in the mid-80s of the last century. After working for a number of independent training firms, he went on to teach semester-long courses in spreadsheet and database management software at Golden Gate University in San Francisco.
His love of teaching has translated into an equal love of writing. For Dummies books are, of course, his all-time favorites to write because they enable him to write to his favorite audience, the beginner. They also enable him to use humor (a key element to success in the training room) and, most delightful of all, to express an opinion or two about the subject matter at hand.
Greg received his doctorate degree in Humanities in Philosophy and Religion with a concentration in Asian Studies and Comparative Religion last May. Everyone is glad that Greg was finally able to get out of school before he retired."
                } });

                   context.SaveChanges();

}


}

}