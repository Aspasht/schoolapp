import * as React from "react"
import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/shadcn/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Application Process",
    href: "/admissions/application-process",
    description: "Learn how to apply and start your journey with us.",
  },
  {
    title: "Requirements",
    href: "/admissions/requirements",
    description: "Find out what you need to join our community.",
  },
  {
    title: "Financial Aid",
    href: "/admissions/financial-aid",
    description: "Explore options to make your education affordable.",
  },
  {
    title: "Inquiry",
    href: "/admissions/inquiry",
    description: "Get in touch for more information or questions.",
  },
];


export function Navbar() {
  return (
    <NavigationMenu className="z-50   ">
      <NavigationMenuList className="">
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/history"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      History
                    </div>
                    <h3>A Legacy of Excellence Since 2029 B.S.</h3>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/history/early-years" title="Our Early Years">
              The school began as a modest setup, operating out of a small building with just a handful of students and teachers. Despite limited resources, our determination to provide quality education remained unwavering. Early lessons were conducted under the shade of trees or within the homes of dedicated teachers. The bond between educators and students was built on trust, discipline, and a shared passion for learning.
              </ListItem>
              <ListItem href="/history/our-philosophy" title="Our Philosophy">
              From our humble beginnings in 2029 B.S., our philosophy has remained steadfast: "Education for Empowerment." We believe that every child deserves the opportunity to learn, grow, and excel. Our curriculum is rooted in the values of discipline, compassion, and creativity, and we strive to instill a sense of responsibility in every student.
              </ListItem> 
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
