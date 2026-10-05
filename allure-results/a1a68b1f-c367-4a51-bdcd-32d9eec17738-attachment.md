# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Multiple_Element_filter\OrangeHRM.spec.ts >> Verify the webelement values
- Location: tests\05_Multiple_Element_filter\OrangeHRM.spec.ts:3:5

# Error details

```
Error: row not found!
```

# Page snapshot

```yaml
- generic [ref=f5e3]:
  - generic:
    - complementary [ref=f5e4]:
      - navigation "Sidepanel" [ref=f5e5]:
        - generic [ref=f5e6]:
          - link [ref=f5e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f5e9]
          - text: 
        - generic [ref=f5e10]:
          - generic [ref=f5e11]:
            - generic [ref=f5e12]:
              - textbox "Search" [ref=f5e15]
              - button "" [ref=f5e16] [cursor=pointer]
            - separator [ref=f5e18]
          - list [ref=f5e19]:
            - listitem [ref=f5e20]:
              - link "Admin" [ref=f5e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f5e25]:
              - link "PIM" [ref=f5e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f5e41]:
              - link "Leave" [ref=f5e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f5e46]:
              - link "Time" [ref=f5e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f5e54]:
              - link "Recruitment" [ref=f5e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f5e62]:
              - link "My Info" [ref=f5e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f5e70]:
              - link "Performance" [ref=f5e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f5e80]:
              - link "Dashboard" [ref=f5e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f5e85]:
              - link "Directory" [ref=f5e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f5e90]:
              - link "Maintenance" [ref=f5e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f5e96]:
              - link "Claim" [ref=f5e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f5e105]:
              - link "Buzz" [ref=f5e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f5e110]:
      - generic [ref=f5e111]:
        - generic [ref=f5e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f5e114]
        - link [ref=f5e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f5e117] [cursor=pointer]
        - list [ref=f5e123]:
          - listitem [ref=f5e124]:
            - generic [ref=f5e125] [cursor=pointer]:
              - img "profile picture" [ref=f5e126]
              - paragraph [ref=f5e127]: Demo Source
              - generic [ref=f5e128]: 
      - navigation "Topbar Menu" [ref=f5e130]:
        - list [ref=f5e131]:
          - listitem [ref=f5e132] [cursor=pointer]:
            - generic [ref=f5e133]:
              - text: Configuration
              - generic [ref=f5e134]: 
          - listitem [ref=f5e135] [cursor=pointer]:
            - link "Employee List" [ref=f5e136]:
              - /url: "#"
          - listitem [ref=f5e137] [cursor=pointer]:
            - link "Add Employee" [ref=f5e138]:
              - /url: "#"
          - listitem [ref=f5e139] [cursor=pointer]:
            - link "Reports" [ref=f5e140]:
              - /url: "#"
          - button "" [ref=f5e142] [cursor=pointer]
  - generic [ref=f5e144]:
    - generic [ref=f5e146]:
      - generic [ref=f5e147]:
        - generic [ref=f5e148]:
          - heading "Employee Information" [level=5] [ref=f5e150]
          - button "" [ref=f5e153] [cursor=pointer]
        - separator [ref=f5e155]
        - generic [ref=f5e157]:
          - generic [ref=f5e159]:
            - generic [ref=f5e161]:
              - generic [ref=f5e162]: Employee Name
              - textbox "Type for hints..." [ref=f5e167]
            - generic [ref=f5e169]:
              - generic [ref=f5e170]: Employee Id
              - textbox [ref=f5e173]
            - generic [ref=f5e175]:
              - generic [ref=f5e176]: Employment Status
              - generic [ref=f5e180] [cursor=pointer]:
                - generic [ref=f5e181]: "-- Select --"
                - generic [ref=f5e182]: 
            - generic [ref=f5e185]:
              - generic [ref=f5e186]: Include
              - generic [ref=f5e190] [cursor=pointer]:
                - generic [ref=f5e191]: Current Employees Only
                - generic [ref=f5e192]: 
            - generic [ref=f5e195]:
              - generic [ref=f5e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f5e201]
            - generic [ref=f5e203]:
              - generic [ref=f5e204]: Job Title
              - generic [ref=f5e208] [cursor=pointer]:
                - generic [ref=f5e209]: "-- Select --"
                - generic [ref=f5e210]: 
            - generic [ref=f5e213]:
              - generic [ref=f5e214]: Sub Unit
              - generic [ref=f5e218] [cursor=pointer]:
                - generic [ref=f5e219]: "-- Select --"
                - generic [ref=f5e220]: 
          - separator [ref=f5e222]
          - generic [ref=f5e223]:
            - button "Reset" [ref=f5e224] [cursor=pointer]
            - button "Search" [ref=f5e225] [cursor=pointer]
      - generic [ref=f5e226]:
        - button " Add" [ref=f5e228] [cursor=pointer]:
          - generic [ref=f5e229]: 
          - text: Add
        - generic [ref=f5e230]:
          - separator [ref=f5e231]
          - generic [ref=f5e232]: (123) Records Found
        - table [ref=f5e235]:
          - rowgroup [ref=f5e236]:
            - row [ref=f5e237]:
              - columnheader "" [ref=f5e238]:
                - generic [ref=f5e240] [cursor=pointer]:
                  - checkbox "" [ref=f5e241]
                  - generic [ref=f5e242]: 
              - columnheader "Id " [ref=f5e244]:
                - text: Id
                - generic [ref=f5e245]:
                  - generic [ref=f5e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f5e247]:
                - text: First (& Middle) Name
                - generic [ref=f5e248]:
                  - generic [ref=f5e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f5e250]:
                - text: Last Name
                - generic [ref=f5e251]:
                  - generic [ref=f5e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f5e253]:
                - text: Job Title
                - generic [ref=f5e254]:
                  - generic [ref=f5e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f5e256]:
                - text: Employment Status
                - generic [ref=f5e257]:
                  - generic [ref=f5e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f5e259]:
                - text: Sub Unit
                - generic [ref=f5e260]:
                  - generic [ref=f5e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f5e262]:
                - text: Supervisor
                - generic [ref=f5e263]:
                  - generic [ref=f5e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f5e265]
          - rowgroup [ref=f5e266]:
            - row [ref=f5e268] [cursor=pointer]:
              - cell "" [ref=f5e269]:
                - generic [ref=f5e272]:
                  - checkbox "" [ref=f5e273]
                  - generic [ref=f5e274]: 
              - cell "0370" [ref=f5e276]
              - cell "Timothy Lewis" [ref=f5e278]
              - cell "Amiano" [ref=f5e280]
              - cell [ref=f5e282]
              - cell [ref=f5e283]
              - cell [ref=f5e284]
              - cell [ref=f5e285]
              - cell [ref=f5e286]:
                - generic [ref=f5e287]:
                  - button "" [ref=f5e288]
                  - button "" [ref=f5e290]
            - row [ref=f5e293] [cursor=pointer]:
              - cell "" [ref=f5e294]:
                - generic [ref=f5e297]:
                  - checkbox "" [ref=f5e298]
                  - generic [ref=f5e299]: 
              - cell "0374" [ref=f5e301]
              - cell "Timothy Lewis" [ref=f5e303]
              - cell "Amiano" [ref=f5e305]
              - cell [ref=f5e307]
              - cell [ref=f5e308]
              - cell [ref=f5e309]
              - cell [ref=f5e310]
              - cell [ref=f5e311]:
                - generic [ref=f5e312]:
                  - button "" [ref=f5e313]
                  - button "" [ref=f5e315]
            - row [ref=f5e318] [cursor=pointer]:
              - cell "" [ref=f5e319]:
                - generic [ref=f5e322]:
                  - checkbox "" [ref=f5e323]
                  - generic [ref=f5e324]: 
              - cell "0373" [ref=f5e326]
              - cell "Timothy Lewis" [ref=f5e328]
              - cell "Amiano" [ref=f5e330]
              - cell [ref=f5e332]
              - cell [ref=f5e333]
              - cell [ref=f5e334]
              - cell [ref=f5e335]
              - cell [ref=f5e336]:
                - generic [ref=f5e337]:
                  - button "" [ref=f5e338]
                  - button "" [ref=f5e340]
            - row [ref=f5e343] [cursor=pointer]:
              - cell "" [ref=f5e344]:
                - generic [ref=f5e347]:
                  - checkbox "" [ref=f5e348]
                  - generic [ref=f5e349]: 
              - cell "0039" [ref=f5e351]
              - cell "Timothy Lewis" [ref=f5e353]
              - cell "Amiano" [ref=f5e355]
              - cell [ref=f5e357]
              - cell [ref=f5e358]
              - cell [ref=f5e359]
              - cell [ref=f5e360]
              - cell [ref=f5e361]:
                - generic [ref=f5e362]:
                  - button "" [ref=f5e363]
                  - button "" [ref=f5e365]
            - row [ref=f5e368] [cursor=pointer]:
              - cell "" [ref=f5e369]:
                - generic [ref=f5e372]:
                  - checkbox "" [ref=f5e373]
                  - generic [ref=f5e374]: 
              - cell "0379" [ref=f5e376]
              - cell "Tove1 Elsa" [ref=f5e378]
              - cell "Nilsson" [ref=f5e380]
              - cell [ref=f5e382]
              - cell [ref=f5e383]
              - cell [ref=f5e384]
              - cell [ref=f5e385]
              - cell [ref=f5e386]:
                - generic [ref=f5e387]:
                  - button "" [ref=f5e388]
                  - button "" [ref=f5e390]
            - row [ref=f5e393] [cursor=pointer]:
              - cell "" [ref=f5e394]:
                - generic [ref=f5e397]:
                  - checkbox "" [ref=f5e398]
                  - generic [ref=f5e399]: 
              - cell "0395" [ref=f5e401]
              - cell "Tove10 Elsa" [ref=f5e403]
              - cell "Nilsson" [ref=f5e405]
              - cell [ref=f5e407]
              - cell [ref=f5e408]
              - cell [ref=f5e409]
              - cell [ref=f5e410]
              - cell [ref=f5e411]:
                - generic [ref=f5e412]:
                  - button "" [ref=f5e413]
                  - button "" [ref=f5e415]
            - row [ref=f5e418] [cursor=pointer]:
              - cell "" [ref=f5e419]:
                - generic [ref=f5e422]:
                  - checkbox "" [ref=f5e423]
                  - generic [ref=f5e424]: 
              - cell "0380" [ref=f5e426]
              - cell "Tove3 Elsa" [ref=f5e428]
              - cell "Nilsson" [ref=f5e430]
              - cell [ref=f5e432]
              - cell [ref=f5e433]
              - cell [ref=f5e434]
              - cell [ref=f5e435]
              - cell [ref=f5e436]:
                - generic [ref=f5e437]:
                  - button "" [ref=f5e438]
                  - button "" [ref=f5e440]
            - row [ref=f5e443] [cursor=pointer]:
              - cell "" [ref=f5e444]:
                - generic [ref=f5e447]:
                  - checkbox "" [ref=f5e448]
                  - generic [ref=f5e449]: 
              - cell "0383" [ref=f5e451]
              - cell "Tove5 Elsa" [ref=f5e453]
              - cell "Nilsson" [ref=f5e455]
              - cell [ref=f5e457]
              - cell [ref=f5e458]
              - cell [ref=f5e459]
              - cell [ref=f5e460]
              - cell [ref=f5e461]:
                - generic [ref=f5e462]:
                  - button "" [ref=f5e463]
                  - button "" [ref=f5e465]
            - row [ref=f5e468] [cursor=pointer]:
              - cell "" [ref=f5e469]:
                - generic [ref=f5e472]:
                  - checkbox "" [ref=f5e473]
                  - generic [ref=f5e474]: 
              - cell "0394" [ref=f5e476]
              - cell "Tove8 Elsa" [ref=f5e478]
              - cell "Nilsson" [ref=f5e480]
              - cell [ref=f5e482]
              - cell [ref=f5e483]
              - cell [ref=f5e484]
              - cell [ref=f5e485]
              - cell [ref=f5e486]:
                - generic [ref=f5e487]:
                  - button "" [ref=f5e488]
                  - button "" [ref=f5e490]
            - row [ref=f5e493] [cursor=pointer]:
              - cell "" [ref=f5e494]:
                - generic [ref=f5e497]:
                  - checkbox "" [ref=f5e498]
                  - generic [ref=f5e499]: 
              - cell "0386" [ref=f5e501]
              - cell "Tove8 Elsa" [ref=f5e503]
              - cell "Nilsson" [ref=f5e505]
              - cell [ref=f5e507]
              - cell [ref=f5e508]
              - cell [ref=f5e509]
              - cell [ref=f5e510]
              - cell [ref=f5e511]:
                - generic [ref=f5e512]:
                  - button "" [ref=f5e513]
                  - button "" [ref=f5e515]
            - row [ref=f5e518] [cursor=pointer]:
              - cell "" [ref=f5e519]:
                - generic [ref=f5e522]:
                  - checkbox "" [ref=f5e523]
                  - generic [ref=f5e524]: 
              - cell "0318" [ref=f5e526]
              - cell "Tristan" [ref=f5e528]
              - cell "L" [ref=f5e530]
              - cell [ref=f5e532]
              - cell [ref=f5e533]
              - cell [ref=f5e534]
              - cell [ref=f5e535]
              - cell [ref=f5e536]:
                - generic [ref=f5e537]:
                  - button "" [ref=f5e538]
                  - button "" [ref=f5e540]
            - row [ref=f5e543] [cursor=pointer]:
              - cell "" [ref=f5e544]:
                - generic [ref=f5e547]:
                  - checkbox "" [ref=f5e548]
                  - generic [ref=f5e549]: 
              - cell "0279" [ref=f5e551]
              - cell "uehwadquzwuehwadquzw" [ref=f5e553]
              - cell "hzzdyzwxmwhzzdyzwxmw" [ref=f5e555]
              - cell [ref=f5e557]
              - cell [ref=f5e558]
              - cell [ref=f5e559]
              - cell [ref=f5e560]
              - cell [ref=f5e561]:
                - generic [ref=f5e562]:
                  - button "" [ref=f5e563]
                  - button "" [ref=f5e565]
            - row [ref=f5e568] [cursor=pointer]:
              - cell "" [ref=f5e569]:
                - generic [ref=f5e572]:
                  - checkbox "" [ref=f5e573]
                  - generic [ref=f5e574]: 
              - cell "0285" [ref=f5e576]
              - cell "Urvi" [ref=f5e578]
              - cell "Sri" [ref=f5e580]
              - cell [ref=f5e582]
              - cell [ref=f5e583]
              - cell [ref=f5e584]
              - cell [ref=f5e585]
              - cell [ref=f5e586]:
                - generic [ref=f5e587]:
                  - button "" [ref=f5e588]
                  - button "" [ref=f5e590]
            - row [ref=f5e593] [cursor=pointer]:
              - cell "" [ref=f5e594]:
                - generic [ref=f5e597]:
                  - checkbox "" [ref=f5e598]
                  - generic [ref=f5e599]: 
              - cell "0273" [ref=f5e601]
              - cell "Urvi" [ref=f5e603]
              - cell "Sri" [ref=f5e605]
              - cell [ref=f5e607]
              - cell [ref=f5e608]
              - cell [ref=f5e609]
              - cell [ref=f5e610]
              - cell [ref=f5e611]:
                - generic [ref=f5e612]:
                  - button "" [ref=f5e613]
                  - button "" [ref=f5e615]
            - row [ref=f5e618] [cursor=pointer]:
              - cell "" [ref=f5e619]:
                - generic [ref=f5e622]:
                  - checkbox "" [ref=f5e623]
                  - generic [ref=f5e624]: 
              - cell "0284" [ref=f5e626]
              - cell "Urvi" [ref=f5e628]
              - cell "Sri" [ref=f5e630]
              - cell [ref=f5e632]
              - cell [ref=f5e633]
              - cell [ref=f5e634]
              - cell [ref=f5e635]
              - cell [ref=f5e636]:
                - generic [ref=f5e637]:
                  - button "" [ref=f5e638]
                  - button "" [ref=f5e640]
            - row [ref=f5e643] [cursor=pointer]:
              - cell "" [ref=f5e644]:
                - generic [ref=f5e647]:
                  - checkbox "" [ref=f5e648]
                  - generic [ref=f5e649]: 
              - cell "0281" [ref=f5e651]
              - cell "Urvi" [ref=f5e653]
              - cell "Sri" [ref=f5e655]
              - cell [ref=f5e657]
              - cell [ref=f5e658]
              - cell [ref=f5e659]
              - cell [ref=f5e660]
              - cell [ref=f5e661]:
                - generic [ref=f5e662]:
                  - button "" [ref=f5e663]
                  - button "" [ref=f5e665]
            - row [ref=f5e668] [cursor=pointer]:
              - cell "" [ref=f5e669]:
                - generic [ref=f5e672]:
                  - checkbox "" [ref=f5e673]
                  - generic [ref=f5e674]: 
              - cell "0280" [ref=f5e676]
              - cell "Urvi" [ref=f5e678]
              - cell "Sri" [ref=f5e680]
              - cell [ref=f5e682]
              - cell [ref=f5e683]
              - cell [ref=f5e684]
              - cell [ref=f5e685]
              - cell [ref=f5e686]:
                - generic [ref=f5e687]:
                  - button "" [ref=f5e688]
                  - button "" [ref=f5e690]
            - row [ref=f5e693] [cursor=pointer]:
              - cell "" [ref=f5e694]:
                - generic [ref=f5e697]:
                  - checkbox "" [ref=f5e698]
                  - generic [ref=f5e699]: 
              - cell "0274" [ref=f5e701]
              - cell "Urvi" [ref=f5e703]
              - cell "Sri" [ref=f5e705]
              - cell [ref=f5e707]
              - cell [ref=f5e708]
              - cell [ref=f5e709]
              - cell [ref=f5e710]
              - cell [ref=f5e711]:
                - generic [ref=f5e712]:
                  - button "" [ref=f5e713]
                  - button "" [ref=f5e715]
            - row [ref=f5e718] [cursor=pointer]:
              - cell "" [ref=f5e719]:
                - generic [ref=f5e722]:
                  - checkbox "" [ref=f5e723]
                  - generic [ref=f5e724]: 
              - cell "0249" [ref=f5e726]
              - cell "Virat" [ref=f5e728]
              - cell "Kohli" [ref=f5e730]
              - cell [ref=f5e732]
              - cell [ref=f5e733]
              - cell [ref=f5e734]
              - cell [ref=f5e735]
              - cell [ref=f5e736]:
                - generic [ref=f5e737]:
                  - button "" [ref=f5e738]
                  - button "" [ref=f5e740]
            - row [ref=f5e743] [cursor=pointer]:
              - cell "" [ref=f5e744]:
                - generic [ref=f5e747]:
                  - checkbox "" [ref=f5e748]
                  - generic [ref=f5e749]: 
              - cell "0396" [ref=f5e751]
              - cell "Vqmfmw" [ref=f5e753]
              - cell "JF" [ref=f5e755]
              - cell [ref=f5e757]
              - cell [ref=f5e758]
              - cell [ref=f5e759]
              - cell [ref=f5e760]
              - cell [ref=f5e761]:
                - generic [ref=f5e762]:
                  - button "" [ref=f5e763]
                  - button "" [ref=f5e765]
            - row [ref=f5e768] [cursor=pointer]:
              - cell "" [ref=f5e769]:
                - generic [ref=f5e772]:
                  - checkbox "" [ref=f5e773]
                  - generic [ref=f5e774]: 
              - cell "09876" [ref=f5e776]
              - cell "yedghjb1 ru84" [ref=f5e778]
              - cell "90jsnd" [ref=f5e780]
              - cell [ref=f5e782]
              - cell [ref=f5e783]
              - cell [ref=f5e784]
              - cell [ref=f5e785]
              - cell [ref=f5e786]:
                - generic [ref=f5e787]:
                  - button "" [ref=f5e788]
                  - button "" [ref=f5e790]
            - row [ref=f5e793] [cursor=pointer]:
              - cell "" [ref=f5e794]:
                - generic [ref=f5e797]:
                  - checkbox "" [ref=f5e798]
                  - generic [ref=f5e799]: 
              - cell "0311" [ref=f5e801]
              - cell "yqlluQZYFR" [ref=f5e803]
              - cell "yaTQBtZgLf" [ref=f5e805]
              - cell [ref=f5e807]
              - cell [ref=f5e808]
              - cell [ref=f5e809]
              - cell [ref=f5e810]
              - cell [ref=f5e811]:
                - generic [ref=f5e812]:
                  - button "" [ref=f5e813]
                  - button "" [ref=f5e815]
            - row [ref=f5e818] [cursor=pointer]:
              - cell "" [ref=f5e819]:
                - generic [ref=f5e822]:
                  - checkbox "" [ref=f5e823]
                  - generic [ref=f5e824]: 
              - cell "0259" [ref=f5e826]
              - cell "zlnudvgazrzlnudvgazr" [ref=f5e828]
              - cell "smzocpbvswsmzocpbvsw" [ref=f5e830]
              - cell [ref=f5e832]
              - cell [ref=f5e833]
              - cell [ref=f5e834]
              - cell [ref=f5e835]
              - cell [ref=f5e836]:
                - generic [ref=f5e837]:
                  - button "" [ref=f5e838]
                  - button "" [ref=f5e840]
        - navigation "Pagination Navigation" [ref=f5e843]:
          - list [ref=f5e844]:
            - listitem [ref=f5e845]:
              - button "" [ref=f5e846] [cursor=pointer]
            - listitem [ref=f5e848]:
              - button "1" [ref=f5e849] [cursor=pointer]
            - listitem [ref=f5e850]:
              - button "2" [ref=f5e851] [cursor=pointer]
            - listitem [ref=f5e852]:
              - button "3" [ref=f5e853] [cursor=pointer]
    - generic [ref=f5e854]:
      - paragraph [ref=f5e855]: OrangeHRM OS 5.9
      - paragraph [ref=f5e856]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e857] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test("Verify the webelement values", async ({ page }) => {
  4  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  5  |     await page.getByPlaceholder('Username').fill("Admin");
  6  |     await page.getByPlaceholder('Password').fill("admin123");
  7  |     await page.getByRole('button', { name: ' Login ' }).click();
  8  | 
  9  |     await page.locator('//a[contains(@href,"viewPimModule")]').click();
  10 |     await page.getByRole('button', { name: ' Add ' }).click();
  11 | 
  12 |     await page.getByRole('textbox', { name: 'First Name' }).fill("iphone15");
  13 |     await page.getByRole('textbox', { name: 'Last Name' }).fill("promax");
  14 |     await page.getByRole('button', { name: 'Save' }).click();
  15 |     await page.waitForURL('**/viewPersonalDetails/**');
  16 | 
  17 |     // go back to PIM page
  18 |     await page.locator('//a[contains(@href,"viewPimModule")]').click();
  19 |     await page.locator('div.oxd-table-card').first().waitFor();
  20 | 
  21 |     // while loop
  22 | 
  23 |     let name: string = "iphone15 promax"
  24 |     let row;
  25 | 
  26 |     while (true) {
  27 |         row = page.locator('div.oxd-table-card').filter({ has: page.getByText(name, { exact: true }) });
  28 |         if (await row.count()) {
  29 |             break;
  30 |         }
  31 |         const next = page.locator('button.oxd-pagination-page-item--previous-next:has(i.bi-chevron-right)');
  32 | 
  33 | 
  34 |         if (await next.count() === 0) {
> 35 |             throw new Error("row not found!")
     |                   ^ Error: row not found!
  36 |         }
  37 |         await next.click();
  38 |         await page.locator('div.oxd-table-card').first().waitFor();
  39 |     }
  40 | 
  41 | 
  42 |     await page.pause();
  43 | })
  44 | 
```