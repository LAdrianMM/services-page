import { createContext } from 'react'
import { settings } from '@config'

interface AppContextProps {
  isFluid: boolean
  isRTL: boolean
  isDark: boolean
  navbarPosition: string
  showBurgerMenu: boolean // controls showing vertical nav on mobile
  currency: string
  isNavbarVerticalCollapsed: boolean // toggle vertical navbar collapse
  navbarStyle: string
}

const AppContext = createContext<AppContextProps>(settings)

export const EmailContext = createContext({ emails: [] })

export const ProductContext = createContext({ products: [] })

export const FeedContext = createContext({ feeds: [] })

export const AuthWizardContext = createContext({ user: {} })

// export const ChatContext = createContext()

export const KanbanContext = createContext({
  KanbanColumns: [],
  kanbanTasks: [],
})

export default AppContext
